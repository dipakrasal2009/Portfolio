import boto3
from flask import Flask

app = Flask(__name__)

@app.route("/LaunchInstance/<OSName>/<regionName>/<instanceType>/<imageId>")
#@app.route("/LaunchInstance/<regionName>/<instanceType>/<imageId>")
def launch_instance(OSName,regionName, instanceType, imageId):
    try:
        myec2 = boto3.resource(
            service_name="ec2",
            region_name=regionName,
            aws_access_key_id= 'AKIAVRUVRDUTQW5BV3RT',
            aws_secret_access_key= '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'
        )

        # Launching the EC2 instance
        instance = myec2.create_instances(
            InstanceName = OSName,
            InstanceType=instanceType,
            ImageId=imageId,
            MaxCount=1,
            MinCount=1
        )

        return f"Instance launched successfully: {instance[0].id}", 200

    except Exception as e:
        return f"Error launching instance: {str(e)}", 500

if __name__ == "__main__":
    app.run()
