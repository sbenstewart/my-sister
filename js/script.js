jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/herrin-fragrance/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Chinna Olikathir",
                "duration": "2:42",
                "file": "01 Chinna Olikathir"
            }, {
                "track": 2,
                "name": "Akka Akka",
                "duration": "1:18",
                "file": "02 Akka Akka"
            }, {
                "track": 3,
                "name": "Aahayathu Paravai",
                "duration": "1:24",
                "file": "03 Aahayathu Paravai"
            }, {
                "track": 4,
                "name": "Bye Bye",
                "duration": "1:59",
                "file": "04 Bye Bye"
            }, {
                "track": 5,
                "name": "Belapaddu",
                "duration": "1:11",
                "file": "05 Belapaddu"
            }, {
                "track": 6,
                "name": "Papa Chinna Papa",
                "duration": "1:44",
                "file": "06 Papa Chinna Papa"
            }, {
                "track": 7,
                "name": "Hello Kutties",
                "duration": "1:21",
                "file": "07 Hello Kutties"
            }, {
                "track": 8,
                "name": "Uyarthuvaar",
                "duration": "1:37",
                "file": "08 Uyarthuvaar"
            }, {
                "track": 9,
                "name": "Cellphone",
                "duration": "1:32",
                "file": "09 Cellphone"
            }, {
                "track": 10,
                "name": "Veedu Kattum",
                "duration": "2:14",
                "file": "10 Veedu Kattum"
            }, {
                "track": 11,
                "name": "Irendu kaasu",
                "duration": "1:53",
                "file": "11 Irendu kaasu"
            }, {
                "track": 12,
                "name": "Ponnakka",
                "duration": "1:30",
                "file": "12 Ponnakka"
            }, {
                "track": 13,
                "name": "Kannukulla",
                "duration": "0:53",
                "file": "13 Kannukulla"
            }, {
                "track": 14,
                "name": "Aatukuti",
                "duration": "1:13",
                "file": "14 Aatukuti"
            }, {
                "track": 15,
                "name": "Ivallavu Anbu",
                "duration": "1:01",
                "file": "15 Ivallavu Anbu"
            }, {
                "track": 16,
                "name": "Ezhumbi Prakaasi",
                "duration": "1:42",
                "file": "16 Ezhumbi Prakaasi"
            }, {
                "track": 17,
                "name": "I am so Happy",
                "duration": "1:42",
                "file": "17 I am so Happy"
            }, {
                "track": 18,
                "name": "Yesu Yesu",
                "duration": "2:47",
                "file": "18 Yesu Yesu"
            }, {
                "track": 19,
                "name": "Stop Stop",
                "duration": "1:09",
                "file": "19 Stop Stop"
            }, {
                "track": 20,
                "name": "Karthar Padaithaar",
                "duration": "0:49",
                "file": "20 Karthar Padaithaar"
            }, {
                "track": 21,
                "name": "Nane Munne",
                "duration": "1:41",
                "file": "21 Nane Munne"
            }, {
                "track": 22,
                "name": "Yesuvin Sinthanai",
                "duration": "0:45",
                "file": "22 Yesuvin Sinthanai"
            }, {
                "track": 23,
                "name": "Yesu Varugiraar",
                "duration": "1:07",
                "file": "23 Yesu Varugiraar"
            }, {
                "track": 24,
                "name": "Yaedhedho",
                "duration": "1:28",
                "file": "24 Yaedhedho"
            }, {
                "track": 25,
                "name": "Aatukuti",
                "duration": "2:17",
                "file": "25 Aatukuti"
            }, {
                "track": 26,
                "name": "Samuel Thatha",
                "duration": "2:11",
                "file": "26 Samuel Thatha"
            }, {
                "track": 27,
                "name": "Ketta Kumaaran",
                "duration": "2:39",
                "file": "27 Ketta Kumaaran"
            }, {
                "track": 28,
                "name": "Chinna Paiyan",
                "duration": "1:52",
                "file": "28 Chinna Paiyan"
            }, {
                "track": 29,
                "name": "Vaan Paravai",
                "duration": "1:31",
                "file": "29 Vaan Paravai"
            }, {
                "track": 30,
                "name": "Vaanatha Paaru",
                "duration": "2:19",
                "file": "30 Vaanatha Paaru"
            }, {
                "track": 31,
                "name": "Ennakaai Yesu",
                "duration": "1:37",
                "file": "31 Ennakaai Yesu"
            }, {
                "track": 32,
                "name": "Aadalam",
                "duration": "1:54",
                "file": "32 Aadalam"
            }, {
                "track": 33,
                "name": "ABCD",
                "duration": "4:42",
                "file": "33 ABCD"
            }, {
                "track": 34,
                "name": "Enakkaga",
                "duration": "0:59",
                "file": "34 Enakkaga"
            }, {
                "track": 35,
                "name": "Jesus Said",
                "duration": "1:05",
                "file": "35 Jesus Said"
            }, {
                "track": 36,
                "name": "Kalla Satan",
                "duration": "1:45",
                "file": "36 Kalla Satan"
            }, {
                "track": 37,
                "name": "Kokkarako",
                "duration": "2:58",
                "file": "37 Kokkarako"
            }, {
                "track": 38,
                "name": "Nilaythiru",
                "duration": "1:35",
                "file": "38 Nilaythiru"
            }, {
                "track": 39,
                "name": "Vannathu Poochi",
                "duration": "1:04",
                "file": "39 Vannathu Poochi"
            }, {
                "track": 40,
                "name": "Vanthae Maatharam",
                "duration": "4:41",
                "file": "40 Vanthae Maatharam"
            }, {
                "track": 41,
                "name": "Pathway",
                "duration": "1:10",
                "file": "41 Pathway"
            }, {
                "track": 42,
                "name": "Deva Neer Vaarum",
                "duration": "5:12",
                "file": "42 Deva Neer Vaarum"
            }, {
                "track": 43,
                "name": "Vaala Aatum Satan",
                "duration": "1:05",
                "file": "43 Vaala Aatum Satan"
            }, {
                "track": 44,
                "name": "Irumanam",
                "duration": "4:47",
                "file": "44 Irumanam"
            }, {
                "track": 45,
                "name": "Thulli Thulli",
                "duration": "3:20",
                "file": "45 Thulli Thulli"
            }, {
                "track": 46,
                "name": "Payanam",
                "duration": "1:16",
                "file": "46 Payanam"
            }, {
                "track": 47,
                "name": "Hallelu Hallelu",
                "duration": "0:49",
                "file": "47 Hallelu Hallelu"
            }, {
                "track": 48,
                "name": "Golden Road",
                "duration": "1:23",
                "file": "48 Golden Road"
            }, {
                "track": 49,
                "name": "Holy Holy Naan",
                "duration": "1:20",
                "file": "49 Holy Holy Naan"
            }, {
                "track": 50,
                "name": "Jericho",
                "duration": "1:55",
                "file": "50 Jericho"
            }, {
                "track": 51,
                "name": "Minavan Valayile",
                "duration": "1:48",
                "file": "51 Minavan Valayile"
            }, {
                "track": 52,
                "name": "Chellapillai Naan",
                "duration": "2:21",
                "file": "52 Chellapillai Naan"
            }, {
                "track": 53,
                "name": "Vetham Ennum",
                "duration": "2:13",
                "file": "53 Vetham Ennum"
            }, {
                "track": 54,
                "name": "Ruppapa Ruppapa",
                "duration": "1:29",
                "file": "54 Ruppapa Ruppapa"
            }, {
                "track": 55,
                "name": "Mannipu Undu",
                "duration": "1:28",
                "file": "55 Mannipu Undu"
            }, {
                "track": 56,
                "name": "Mannipu Undu Uncut",
                "duration": "1:26",
                "file": "56 Mannipu Undu Uncut"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
                $("html, body").animate({ scrollTop: 0 }, "slow");
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
//Player controls while scrolling.


   