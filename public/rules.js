{
  "rules": {
    // public read access
    ".read": true,

    "users": {
      "$uid": {
        // write access only to your own data
        ".write": "$uid === auth.uid",
      }
    }
  }
}
