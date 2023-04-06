"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs = require("aws-cdk-lib/aws-logs");
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-lambda-log-retention');
new lambda.Function(stack, 'OneWeek', {
    code: new lambda.InlineCode('exports.handler = (event) => console.log(JSON.stringify(event));'),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
    logRetention: logs.RetentionDays.ONE_WEEK,
});
new lambda.Function(stack, 'OneMonth', {
    code: new lambda.InlineCode('exports.handler = (event) => console.log(JSON.stringify(event));'),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
    logRetention: logs.RetentionDays.ONE_MONTH,
});
new lambda.Function(stack, 'OneYear', {
    code: new lambda.InlineCode('exports.handler = (event) => console.log(JSON.stringify(event));'),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
    logRetention: logs.RetentionDays.ONE_YEAR,
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcubG9nLXJldGVudGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmxvZy1yZXRlbnRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNkM7QUFDN0MsbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUVqRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDLENBQUM7QUFFakUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDcEMsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxrRUFBa0UsQ0FBQztJQUMvRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0lBQ25DLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7Q0FDMUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDckMsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxrRUFBa0UsQ0FBQztJQUMvRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0lBQ25DLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Q0FDM0MsQ0FBQyxDQUFDO0FBRUgsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDcEMsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxrRUFBa0UsQ0FBQztJQUMvRixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0lBQ25DLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7Q0FDMUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9ncyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbG9ncyc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuXG5jb25zdCBzdGFjayA9IG5ldyBjZGsuU3RhY2soYXBwLCAnYXdzLWNkay1sYW1iZGEtbG9nLXJldGVudGlvbicpO1xuXG5uZXcgbGFtYmRhLkZ1bmN0aW9uKHN0YWNrLCAnT25lV2VlaycsIHtcbiAgY29kZTogbmV3IGxhbWJkYS5JbmxpbmVDb2RlKCdleHBvcnRzLmhhbmRsZXIgPSAoZXZlbnQpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7JyksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gIGxvZ1JldGVudGlvbjogbG9ncy5SZXRlbnRpb25EYXlzLk9ORV9XRUVLLFxufSk7XG5cbm5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdPbmVNb250aCcsIHtcbiAgY29kZTogbmV3IGxhbWJkYS5JbmxpbmVDb2RlKCdleHBvcnRzLmhhbmRsZXIgPSAoZXZlbnQpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7JyksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gIGxvZ1JldGVudGlvbjogbG9ncy5SZXRlbnRpb25EYXlzLk9ORV9NT05USCxcbn0pO1xuXG5uZXcgbGFtYmRhLkZ1bmN0aW9uKHN0YWNrLCAnT25lWWVhcicsIHtcbiAgY29kZTogbmV3IGxhbWJkYS5JbmxpbmVDb2RlKCdleHBvcnRzLmhhbmRsZXIgPSAoZXZlbnQpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7JyksXG4gIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gIGxvZ1JldGVudGlvbjogbG9ncy5SZXRlbnRpb25EYXlzLk9ORV9ZRUFSLFxufSk7XG5cbmFwcC5zeW50aCgpO1xuIl19