<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 😵</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center text-white">

    <div class="text-center px-6">
        <h1 class="text-[10rem] font-extrabold drop-shadow-lg animate-bounce">
            404
        </h1>

        <p class="text-2xl font-semibold mt-4">
            Nyasar bang 😵?
        </p>


        <div class="mt-8 flex gap-4 justify-center">
            <a href="{{ url('/') }}"
               class="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:scale-105 transition">
                🏠 Balik ke Rumah
            </a>

        </div>

        <p class="mt-10 text-sm text-white/60 italic">
            Error ini disponsori oleh: link typo, ngantuk, dan “eh kok error?”
        </p>
    </div>

</body>
</html>
