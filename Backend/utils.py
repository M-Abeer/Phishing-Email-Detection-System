# # import torch
# # from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

# # device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# # tokenizer = DistilBertTokenizer.from_pretrained("./phishing-model", local_files_only=True)
# # model = DistilBertForSequenceClassification.from_pretrained("./phishing-model", local_files_only=True)
# # model.to(device)
# # model.eval()

# # # def predict_email(email_text):
# # #     inputs = tokenizer(email_text, return_tensors="pt", truncation=True, padding=True, max_length=512)
# # #     inputs = {key: val.to(device) for key, val in inputs.items()}

# # #     with torch.no_grad():
# # #         outputs = model(**inputs)
# # #         logits = outputs.logits
# # #         prediction = torch.argmax(logits, dim=1).item()

# # #     return {
# # #         "label": "phishing" if prediction == 1 else "ham",
# # #         "score": torch.softmax(logits, dim=1).max().item()
# # #     }
# # def predict_email(email_text, threshold=0.6):  # You can adjust the threshold here
# #     inputs = tokenizer(email_text, return_tensors="pt", truncation=True, padding=True, max_length=512)
# #     inputs = {key: val.to(device) for key, val in inputs.items()}

# #     with torch.no_grad():
# #         outputs = model(**inputs)
# #         logits = outputs.logits
# #         probs = torch.softmax(logits, dim=1)
# #         phishing_score = probs[0][1].item()  # Probability of class 1 (phishing)

# #     return {
# #         "label": "phishing" if phishing_score >= threshold else "ham",
# #         "score": phishing_score
# #     }


# import torch
# from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# tokenizer = DistilBertTokenizer.from_pretrained("./phishing-model", local_files_only=True)
# model = DistilBertForSequenceClassification.from_pretrained("./phishing-model", local_files_only=True)
# model.to(device)
# model.eval()

# def predict_email(email_text, threshold=0.75):  # Default threshold is now stricter
#     inputs = tokenizer(email_text, return_tensors="pt", truncation=True, padding=True, max_length=512)
#     inputs = {key: val.to(device) for key, val in inputs.items()}

#     with torch.no_grad():
#         outputs = model(**inputs)
#         logits = outputs.logits
#         probs = torch.softmax(logits, dim=1)
#         phishing_score = probs[0][1].item()  # Class 1: phishing

#     label = "phishing" if phishing_score >= threshold else "ham"
#     risk = (
#         "high" if phishing_score >= 0.9 else
#         "medium" if phishing_score >= 0.6 else
#         "low"
#     )

#     return {
#         "label": label,
#         "score": phishing_score,
#         "risk": risk
#     }


######################################################################################

import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

tokenizer = DistilBertTokenizer.from_pretrained("./phishing-model", local_files_only=True)
model = DistilBertForSequenceClassification.from_pretrained("./phishing-model", local_files_only=True)
model.to(device)
model.eval()

def predict_email(email_text, threshold=0.75):
    inputs = tokenizer(email_text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    inputs = {key: val.to(device) for key, val in inputs.items()}

    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        probs = torch.softmax(logits, dim=1)
        phishing_score = probs[0][1].item()

    label = "phishing" if phishing_score >= threshold else "ham"
    risk = (
        "high" if phishing_score >= 0.9 else
        "medium" if phishing_score >= 0.6 else
        "low"
    )

    return {
        "label": label,
        "score": phishing_score,
        "risk": risk
    }
