## This is My Portfolio Project

## EC2 Instance Launcher Web Interface

This project provides a web-based interface to launch EC2 instances in AWS using Flask and Boto3. The interface allows users to input required details like the Operating System Name (OSName), region, instance type, and Amazon Machine Image (AMI) ID to launch an EC2 instance. Additionally, the project includes APIs for sending emails and WhatsApp messages, demonstrating the integration of multiple services using Flask.

Table of Contents

    Features
    Technologies Used
    Project Structure
    Setup
    Launching EC2 Instances
    Sending Emails via Flask API
    Sending WhatsApp Messages via Flask API
    Usage
    Security Considerations
    License

Features

    Launch EC2 Instances: A web interface that allows users to launch EC2 instances with custom configurations.
    Email API: An API endpoint for sending emails using the Flask framework and yagmail.
    WhatsApp Message API: An API endpoint for sending WhatsApp messages using Flask and pywhatkit.
    Multi-threading: Uses threading to handle API requests asynchronously, ensuring that the main thread is not blocked.

Technologies Used

    Flask: A lightweight WSGI web application framework in Python.
    Boto3: The AWS SDK for Python to interact with AWS services including EC2.
    yagmail: A Python library to send emails via SMTP.
    pywhatkit: A Python library for sending WhatsApp messages.
    HTML/CSS/TypeScript: Used for the frontend user interface built with Angular 17.

Project Structure

graphql

├── app.py                  # Main Flask application file
├── ec2_launcher.py         # Flask API for launching EC2 instances
├── email_sender.py         # Flask API for sending emails
├── whatsapp_sender.py      # Flask API for sending WhatsApp messages
├── static
│   ├── css
│   │   └── styles.css      # CSS styles for the frontend
│   ├── ts
│   │   └── script.ts       # TypeScript file for frontend logic
│   └── html
│       └── index.html      # HTML file for the user interface
└── README.md               # Project documentation

Setup
Prerequisites

    Python 3.7+
    Flask
    Boto3
    yagmail
    pywhatkit
    AWS account with access keys for EC2

Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/ec2-launcher.git
cd ec2-launcher

Install the dependencies:

sh

pip install -r requirements.txt

Set up AWS credentials:

You can set up your AWS credentials using environment variables or AWS configuration files. Never hardcode your credentials in the code.

Run the Flask application:

sh

    python app.py

Launching EC2 Instances
API Endpoint

    Route: /LaunchInstance/<OSName>/<regionName>/<instanceType>/<imageId>
    Method: GET
    Parameters:
        OSName: Name of the operating system or instance.
        regionName: The AWS region where the instance should be launched.
        instanceType: The type of EC2 instance (e.g., t2.micro).
        imageId: The ID of the Amazon Machine Image (AMI).

Example

sh

http://your-server-address/LaunchInstance/Ubuntu/ap-south-1/t2.micro/ami-0a4408457f9a03be3

Sending Emails via Flask API
API Endpoint

    Route: /mail/<receiver>/<subject>/<message>
    Method: GET
    Parameters:
        receiver: The recipient's email address.
        subject: The subject of the email.
        message: The content of the email.

Example

sh

http://your-server-address/mail/example@example.com/Test/HelloWorld

Sending WhatsApp Messages via Flask API
API Endpoint

    Route: /whatsapp/<mobileNumber>/<message>
    Method: GET
    Parameters:
        mobileNumber: The recipient's WhatsApp number (including country code).
        message: The content of the WhatsApp message.

Example

sh

http://your-server-address/whatsapp/911234567890/HelloWorld

Usage
Frontend

The frontend provides a user-friendly interface for launching EC2 instances. Users can input the necessary parameters and launch instances directly from the web page.
Backend

The backend API handles requests for launching EC2 instances, sending emails, and sending WhatsApp messages. It is designed to be scalable and secure, with all sensitive information handled appropriately.
Security Considerations

    AWS Credentials: Store AWS credentials securely using environment variables or AWS IAM roles.
    API Security: Implement authentication and authorization mechanisms to protect the API endpoints.
    Data Validation: Ensure that all inputs are validated to prevent injection attacks.

License

This project is licensed under the MIT License - see the LICENSE file for details.
