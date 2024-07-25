import * as cdk from 'aws-cdk-lib';
import { SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const l1S3Bucket = new CfnBucket(this, "myl1bucket", {
      versioningConfiguration: {
        status: 'Enabled'  // Configura el versionado en 'Enabled'
      }
    });

    const l2s3bucket = new Bucket(this, "MyL2Bucket", {
      //removalPolicy: cdk.RemovalPolicy.DESTROY,
      versioned : true,
      bucketName: "mlunabucketdemo"
    })

    const myqueue = new Queue(this, "mlunaqueuecdk", {
      queueName: "mlunaqueuecdk"
    })

    l2s3bucket.addEventNotification(EventType.OBJECT_CREATED, new SqsDestination(myqueue) )
    
  }
}
