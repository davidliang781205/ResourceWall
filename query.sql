SELECT 
    urls.id,
    urls.title,
    urls.description,
    urls.genre,
    urls.media_type,
    urls.original_url,
    urls.thumbnail_url,
    users.email AS OWNER,
    COUNT(likes.user_id),
    AVG(rates.rating),
    comments.content,
    comments.user_id
FROM urls 
JOIN users ON users.id = urls.user_id
LEFT JOIN likes ON likes.url_id = urls.id
LEFT JOIN rates ON rates.url_id = urls.user_id
LEFT JOIN comments ON comments.user_id = urls.user_id
GROUP BY urls.id,
    urls.title,
    urls.description,
    urls.genre,
    urls.media_type,
    urls.original_url,
    urls.thumbnail_url,
    users.email,
    comments.content,
    comments.user_id

SELECT COUNT(url_id) FROM likes
WHERE 



-- .join("users", "users.id", "=", "urls.user_id")
--       .join("likes", "users.id", "=", "urls.user_id")
--       .join("users", "users.id", "=", "urls.user_id")