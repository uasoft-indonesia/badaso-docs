---
docId: "analytics"
sidebar_position: 14
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/push-notification.md
---

# Push Notification

Badaso menyediakan firebase cloud messaging untuk push notifications. Anda dapat mendaftarkan event dari setiap tabel yang dihasilkan CRUD yaitu onCreate, onRead, onUpdate, onDelete.

- Setup the .env file
```bash
# ADD FIREBASE ENV
# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > GENERAL
MIX_FIREBASE_API_KEY=""
MIX_FIREBASE_AUTH_DOMAIN=""
MIX_FIREBASE_PROJECT_ID=""
MIX_FIREBASE_STORAGE_BUCKET=""
MIX_FIREBASE_MESSAGE_SEENDER=""
MIX_FIREBASE_APP_ID=""
MIX_FIREBASE_MEASUREMENT_ID=""

# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES 
MIX_FIREBASE_WEB_PUSH_CERTIFICATES=""

# GET THE VALUE FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES FROM BOX KEY PAIR > WEB PUSH CERTIFICATE
MIX_FIREBASE_SERVER_KEY=""
```

- Panggil command `php artisan badaso:firebase-sw`

## Use the `FCMNotification` class

Berikut ini contoh dari penggunaan class `FCMNotification` untuk kebutuhan push notification.

```bash
// ======== Instantiate the class ========

$notification = new FCMNotification ();

// ======== Sending the notification ========

$notification->send(
  [tokenClientFirebaseCloudNotification: string] array, 
  title: string, 
  message: string, 
  data: [key => value, ...] array
);

// ======== Contoh  ========
// $notification->send(
//    ["eKk2LSpXVE4hasCAP9t7Vy:APA91bHafroaQcAI3hTdXLYLXCRpaXSgZOqoNWVnNxMut8LlLJJ-LQJVjok2fONRV7c_J_JtymY7Q13F5d0SLxycRCTbv8539uuez2S1aka8yAXHBGg_Kd2xmjwEKTtR3D41cyZc3iSj"], 
//    "Title", 
//    "Message", 
//    ["userId" => 65372]
// );
```