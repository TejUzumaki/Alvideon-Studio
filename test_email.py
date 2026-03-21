import resend

# 🔴 IMPORTANT: Replace this with your real API key
resend.api_key = "re_6zDDks7k_KJJMyfExsVxmW8kM51N7pjnL"

response = resend.Emails.send({
  "from": "onboarding@resend.dev",
  "to": "alvideonsupport@gmail.com",
  "subject": "Test Email from Termux",
  "html": "<p>This is a test email from Python using Resend API 🚀</p>"
})

print(response)
