<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome page</title>

    <script src="{{ asset('js/app.js') }}"></script>

    <style>
        #root {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>

</head>
<body>

    <div id="root">
        <img src="{{ asset('img/logo.png') }}" alt="" srcset="">
    </div>

    <script src="{{ asset('js/riot.js') }}"></script>
</body>
</html>
