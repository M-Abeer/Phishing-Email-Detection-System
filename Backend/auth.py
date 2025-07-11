# from flask import Blueprint, request, jsonify
# from werkzeug.security import generate_password_hash, check_password_hash
# from db import get_db_connection

# auth_bp = Blueprint("auth", __name__)

# @auth_bp.route("/register", methods=["POST"])
# def register():
#     data = request.get_json()
#     name, email, password = data["name"], data["email"], data["password"]

#     conn = get_db_connection()
#     cursor = conn.cursor()

#     try:
#         cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
#                        (name, email, generate_password_hash(password)))
#         conn.commit()
#         return jsonify({"message": "User registered successfully"})
#     except:
#         return jsonify({"error": "Email already registered"}), 409
#     finally:
#         cursor.close()
#         conn.close()

# @auth_bp.route("/login", methods=["POST"])
# def login():
#     data = request.get_json()
#     email, password = data["email"], data["password"]

#     conn = get_db_connection()
#     cursor = conn.cursor(dictionary=True)
#     cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
#     user = cursor.fetchone()

#     if user and check_password_hash(user["password"], password):
#         return jsonify({"id": user["id"], "name": user["name"], "role": user["role"]})
#     return jsonify({"error": "Invalid credentials"}), 401


# After Authentication using JWT
import jwt
from datetime import datetime, timedelta
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_db_connection

# Secret key for encoding and decoding JWT tokens
SECRET_KEY = '123456789'

auth_bp = Blueprint("auth", __name__)

# Helper function to generate JWT token
def generate_token(user_id, role):
    expiration = datetime.utcnow() + timedelta(days=1)  # Token expires in 1 day
    token = jwt.encode({
        'user_id': user_id,
        'role': role,
        'exp': expiration
    }, SECRET_KEY, algorithm='HS256')
    return token

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name, email, password = data["name"], data["email"], data["password"]

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
                       (name, email, generate_password_hash(password)))
        conn.commit()
        return jsonify({"message": "User registered successfully"})
    except:
        return jsonify({"error": "Email already registered"}), 409
    finally:
        cursor.close()
        conn.close()

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email, password = data["email"], data["password"]

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    if user and check_password_hash(user["password"], password):
        # Generate JWT token
        token = generate_token(user["id"], user["role"])
        return jsonify({
            "message": "Login successful",
            "token": token
        })
    return jsonify({"error": "Invalid credentials"}), 401

@auth_bp.route("/logout", methods=["POST"])
def logout():
    # Since JWT is stateless, you can only "log out" on the client side by deleting the token
    return jsonify({"message": "Logged out successfully"})


# Decorator to protect routes and check JWT
def token_required(f):
    def decorator(*args, **kwargs):
        token = None
        # Check if the token is present in the headers
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]  # Remove "Bearer " part
        
        if not token:
            return jsonify({"error": "Token is missing"}), 403
        
        try:
            # Decode the token
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            current_user = data['user_id']
            # Add user id and role to the request for later use
            request.user_id = current_user
            request.role = data['role']
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401
        
        return f(*args, **kwargs)

    return decorator
