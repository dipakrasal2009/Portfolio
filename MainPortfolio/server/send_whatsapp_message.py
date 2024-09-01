import pywhatkit as kit
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/whatsapp/<mobile_number>/<msg>", methods=["GET"])
def whatsapp(mobile_number, msg):
    try:
        # Specify the phone number with the country code
        phone_number = f"+{mobile_number}"

        # Send the message instantly
        kit.sendwhatmsg_instantly(phone_number, msg)

        return jsonify({"status": "success", "message": "Message sent successfully."})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
