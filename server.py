from flask import Flask, request, jsonify
import resend

app = Flask(__name__)

# 🔴 Replace with your real API key
resend.api_key = "re_9UoM6Azh_NiRJWo86QnBvGCTxHMub132N"

@app.route('/send', methods=['POST'])
def send_email():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    try:
        resend.Emails.send({
            "from": "onboarding@resend.dev",
            "to": "alvideonsupport@gmail.com",
            "subject": "New Contact Form Message",
            "html": f"""
                <h2>New Message</h2>
                <p><b>Name:</b> {name}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Message:</b> {message}</p>
            """
        })

        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
