from flask import Blueprint, request, jsonify
from utils import predict_email
from db import get_db_connection

routes_bp = Blueprint("routes", __name__)

@routes_bp.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    email_text, user_id = data["email_text"], data["user_id"]
    threshold = data.get("threshold", 0.75)

    result = predict_email(email_text, threshold)

    # Save to DB
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO email_scans (user_id, email_text, label, score, risk) VALUES (%s, %s, %s, %s, %s)",
        (user_id, email_text, result["label"], result["score"], result["risk"])
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify(result)

@routes_bp.route("/user-history/<int:user_id>")
def user_history(user_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM email_scans WHERE user_id=%s ORDER BY scanned_at DESC", (user_id,))
    history = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(history)

@routes_bp.route("/admin/users")
def admin_users():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, name, email FROM users WHERE role='user'")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)

@routes_bp.route("/admin/user-emails/<int:user_id>")
def admin_user_emails(user_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM email_scans WHERE user_id=%s ORDER BY scanned_at DESC", (user_id,))
    emails = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(emails)


@routes_bp.route("/admin/all-user-emails")
def admin_all_user_emails():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    # SQL query to fetch records for all users along with email scans
    cursor.execute("""
        SELECT u.id as user_id, u.name, u.email, es.email_text, es.label, es.score, es.risk, es.scanned_at
        FROM users u
        LEFT JOIN email_scans es ON u.id = es.user_id
        ORDER BY es.scanned_at DESC
    """)
    
    # Fetch all records
    user_emails = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(user_emails)
