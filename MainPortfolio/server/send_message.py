from twilio.rest import Client
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/sendsms/<mobilenumber>/<message>")
def send_message(mobilenumber, message):
    try:
        # Store sensitive information in environment variables
        account_sid = 'enter twilio account sid'
        auth_token = 'enter twilio auth token'
        client = Client(account_sid, auth_token)

        # Send SMS
        sms = client.messages.create(
            from_='enter your twilio mibile number',
            body=message,
            to=mobilenumber
        )

        # Return success response
        return jsonify({"status": "success", "message_sid": sms.sid}), 200

    except Exception as e:
        # Return error response
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

