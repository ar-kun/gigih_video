# gigih_video 

# (Back-End)

## Getting Started

<div>
<p>clone repo</p>
<p>then run:</p>
</div>

cd to server

```
npm install
```

create a .env

```
API_KEY='xxx'
SECRET_KEY='xxx';
```

replace xxx with valid key

~ API KEY = Go to <a href="https://console.developers.google.com/">https://console.developers.google.com/</a> and enable the YouTube Data API v3 service.

~ Secret key = You can run node generateSecret.js

<div>
<p>Run the development server:</p>
</div>

```
npm run dev
```

<div>
<p>Then the server will run on port 5000 as default</p>
</div>

## API Responses and Requests

### Video

Get All Video

Route Get : /api/video

~ Success Response ~
Status code : 200

```
{
    "status": "success",
    "data": [
        {
            "title": "7 Inovasi Teknologi Paling Baru dan Canggih yang Ada di Seluruh Dunia",
            "description": "CalonSarjana #CalonIlmuwan #Teknologi Subscribe Channel Utama Calon Sarjana ...",
            "thumbnail": "https://i.ytimg.com/vi/JWMOPIUh_R4/hqdefault.jpg",
            "publishedAt": "2023-07-02T04:00:10Z",
            "channelTitle": "Calon Ilmuwan",
            "videoId": "JWMOPIUh_R4"
        },
    ]
}
```

~ Failed Response ~
Status code : 500

```
{
    "status": "Failed to get data",
    "error": "Internal Server Error"
}
```

Get One Video

Route Get : /api/video/:videoId

~ Success Response ~
Status code : 200

```
{
    "status": "success",
    "data": [
        {
            "title": "7 Inovasi Teknologi Paling Baru dan Canggih yang Ada di Seluruh Dunia",
            "description": "#CalonSarjana #CalonIlmuwan #Teknologi\n\nSubscribe Channel Utama Calon Sarjana ► https://www.youtube.com/@CalonSarjanaOfficial \nInstagram:: https://www.instagram.com/calonsarjanafakta/\n\nSumber:\nhttps://pastebin.com/EiDswYeX \n\nFor copyright matters please contact us at: calonsarjana@hotmail.com \n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nIKUT BERKONTRIBUSI\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\nKalo kalian mau ikutan kontribusi di setiap video-video kita bisa kok!!! kasih ide-ide kalian di link ini yaa !! http://bit.ly/2P7FGxx",
            "thumbnail": "https://i.ytimg.com/vi/JWMOPIUh_R4/hqdefault.jpg",
            "publishedAt": "2023-07-02T04:00:10Z",
            "channelTitle": "Calon Ilmuwan",
            "videoId": "JWMOPIUh_R4"
        }
    ]
}
```

~ Failed Response ~
Status code : 500

```
{
    "status": "Failed to get data",
    "error": "Internal Server Error"
}
```

### Commnet

Get All Comment
Route Get : /api/comment

~ Success Response ~
Status code : 200

```
{
    "message": "Success get All data comment",
    "data": [
        {
            "videoID": "Test-02",
            "comment": "Coba comment di update yahh mama",
            "nama": "shin",
            "createdAt": "2023-07-28T03:49:47.183Z",
            "updatedAt": "2023-07-28T04:23:58.155Z",
            "id": "64c33adb4e1e78ebbd7970c8"
        },
    ]
}
```

~ Failed Response ~
Status code : 500

```
{
    message: err.message || 'Some error occurred while retrieving comment.',
}
```

Get All Comment with Video id

Route Get : /api/comment/:id

~ Success Response ~
Status code : 200

```
{
    "status": "success",
    "data": [
        {
            "videoID": "JWMOPIUh_R4",
            "comment": "Coba comment kedua",
            "nama": "shin",
            "createdAt": "2023-08-14T13:24:11.580Z",
            "updatedAt": "2023-08-14T13:24:11.580Z",
            "id": "64da2afb0a9ee530f08a8a97"
        },
    ]
}
```

~ Failed Response ~
Status code : 500

```
{
  status: "Failed to find comment",
  message: "Error retrieving comments for video with id xxx"
}
```

Create comment

Route post : /api/comment
~ Success Response ~
Status code : 200

```
{
    "message": "Comment created!",
    "data": {
        "videoID": "JWMOPIUh_R4",
        "comment": "Coba comment keempat",
        "nama": "shin",
        "createdAt": "2023-08-14T15:18:34.185Z",
        "updatedAt": "2023-08-14T15:18:34.185Z",
        "id": "64da45ca8d7dd4bbdcd6875f"
    }
}
```

~ Failed Response ~
Status code : 500

```
{
    message: err.message || 'Some error occurred while creating the Comment.',
}
```

Update comment

Route put : /api/comment/:id

~ Success Response ~
Status code : 200

```
{
  message: 'comment was updated successfully.'
}
```

~ Failed Response ~
Status code : 404 || 500

```
{
     message: `Cannot update comment. Maybe comment was not found!`,
}

{
    message: `Error updating comment. err: ${err.message}`,
}
```

Update comment

Route delete : /api/comment/:id

~ Success Response ~
Status code : 200

```
{
    "message": "comment was deleted successfully!"
}
```

~ Failed Response ~
Status code : 404 || 500

```
{
    message: `Cannot delete comment. Maybe comment was not found!`,
}

{
    message: `Could not delete comment. err: ${err.message}`
}
```

### Auth

Auth Login
Route Get : /api/user/login

~ Success Response ~
Status code : 200

```
{
    "status": "Login Success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkYW0ucmFtZGFuIiwiaWF0IjoxNjkyMDI0MjMyLCJleHAiOjE2OTIwMjc4MzJ9.FxGz9RnS7Nxf13FrcRqIa8Q2ot2PAd_4GDlkhBhcj0I",
    "data": {
        "username": "adam.ramdan"
    }
}
```

~ Failed Response ~
Status code : 400 || 500

```
{
  error: 'Cannot find user'
}

{
  error: 'An error occurred while logging in'
}
```

Auth Register
Route Get : /api/user/login

~ Success Response ~
Status code : 201

```
{
  message: 'User registered successfully'
}
```

~ Failed Response ~
Status code : 400 || 500

```
{
    "error": "Username or email already exists"
}

{
  error: 'An error occurred while registering the user'
}
```

# (Front-End)

## Getting Started

<div>
<p>clone repo</p>
<p>then run:</p>
</div>

cd to client

```
npm install
```

<div>
<p>Run the development server:</p>
</div>

```
npm run dev
```

<div>
<p>Then the server will run on port 5173 as default</p>
</div>
