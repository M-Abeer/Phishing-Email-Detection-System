# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from utils import predict_email

# # app = Flask(__name__)
# # CORS(app)  # Allow cross-origin requests

# # @app.route("/")
# # def index():
# #     return jsonify({"message": "Phishing Detection API is running"})

# # @app.route("/predict", methods=["POST"])
# # def predict():
# #     data = request.get_json()
# #     email_text = data.get("email_text")

# #     if not email_text:
# #         return jsonify({"error": "No email_text provided"}), 400

# #     result = predict_email(email_text)
# #     return jsonify(result)

# # if __name__ == "__main__":
# #     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from utils import predict_email

# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests

# @app.route("/")
# def index():
#     return jsonify({"message": "Phishing Detection API is running"})

# @app.route("/predict", methods=["POST"])
# def predict():
#     data = request.get_json()
#     email_text = data.get("email_text")
#     threshold = data.get("threshold", 0.75)  # Optional threshold from request, default is 0.75

#     if not email_text:
#         return jsonify({"error": "No email_text provided"}), 400

#     result = predict_email(email_text, threshold=threshold)
#     return jsonify(result)

# if __name__ == "__main__":
#     app.run(debug=True)



######################################################################################


from flask import Flask
from auth import auth_bp
from routes import routes_bp
from flask import Flask, jsonify, request
from flask_cors import CORS  # Import Flask-CORS


app = Flask(__name__)
CORS(app)


app.register_blueprint(auth_bp)
app.register_blueprint(routes_bp)

@app.route("/")
def home():
    return {"message": "Phishing Detection API is running"}

# if __name__ == "__main__":
#     app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Allow external access
