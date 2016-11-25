# WakeMyDyno
Simple Google script to wake a heroku dyno (i.e. call an endpoint of your dyno) every hour in a given hour range.
It uses Google Sheets as interface and Google Script to execute the request.
Inspired by wakemydyno.com.

# Features
1. Sends a request to your dynos every hour in a customizable range of hours.
2. Optionally sends an email to your google mail address if there've been any errors.

# Set-up Instructions
1. [Copy](https://goo.gl/4TR2lZ) the configuration Sheet to your Google Drive.
2. Allow Google Sheets to access your google account when requested.
3. Setup your dyno addresses and hour range. Note that all hours must be in UTC time.
4. In Google Sheets menu go to `Tools` / `Script Editor...`
5. In the Script Editor menu go to `Resources` / `Current project triggers`
6. Select `wakeMyDynos` -> `Time driven` -> `Hour timer` -> `Every hour`
7. `Save`
