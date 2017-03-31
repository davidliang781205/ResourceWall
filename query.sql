SELECT * FROM urls JOIN users ON users.id = user_id
JOIN likes ON likes.user_id = urls.user_id
JOIN rates ON rates.user_id = urls.user_id
JOIN comments ON comments.user_id = urls_user_id;


-- .join("users", "users.id", "=", "urls.user_id")
--       .join("likes", "users.id", "=", "urls.user_id")
--       .join("users", "users.id", "=", "urls.user_id")