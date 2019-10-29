/*外部引入  确认打开次数*/

$.ajax({
    type: "GET",
    dataType: "text",
    url: "http://www.bticest.com:8080/H5Service.asmx/H5?CourseId=1104&CourseTitle=全新 Microsoft 365 合规服务，助力降低企业风险",
});



	
//背景音乐的播放与暂停
function audioPlay() {
    var myAudio = document.getElementById("bgaudio");
    var audioImg = document.getElementById("audioImg");
    if (myAudio !== null) {
        if (myAudio.paused) {
            myAudio.play();
            audioImg.src = "./images/play.png";
        } else {
            audioImg.src = "./images/pause.jpg"
            myAudio.pause();
        }
    }
};
function index1() {

    $("#part1_1").animate({
        width: "1.5rem"
    }, 1000, function() {
        $("#part1_2_3").animate({
            left: ".72rem"
        }, 1000,function() {
            $("#part1_2_2").animate({
                right: "1.04rem"
            }, 900)
            $("#part1_2_1").animate({
                left: "1.04rem"
            }, 900,function(){
                
            
            $("#part1_3").animate({
                width: "4.32rem"
            }, 1000)
            $("#part1_4").animate({
                left: "1.22rem"
            }, 1000, function() {
                $("#part1_5_1").animate({
                    width: "1.8rem"
                }, 600);
                // $("#part1_5_3").animate({
                //     width: "2.06rem"
                // }, 1200)
                $("#part1_5_2").animate({
                    width: "4.32rem"
                }, 1400)
            })
        })
    })
});
}

function index2() {
    $("#part2_1_1").animate({
        width: "5.6rem"
    }, 800)
    $("#part2_1_2").animate({
        left: ".4rem"
    }, 800)
    $("#part2_2").animate({
        width: "5.6rem"
    }, 1000)
    $("#part2_3").animate({
        left: ".4rem"
    }, 800, function() {
        $("#part2_4_2").animate({
            left: "1.86rem"
        }, 1000, function() {
            $("#part2_4_1").animate({
                left: ".4rem"
            }, 700)
            $("#part2_4_3").animate({
                left: "2.47rem"
            }, 700)
            $("#part2_5").animate({
                width: "2.5rem"
            }, 1400);
        })
    })

}

function index3() {
    $("#part3_1").animate({
        left: ".4rem"
    }, 800);
    $("#part3_2").animate({
        left: ".4rem"
    }, 1200);
    $("#part3_3").animate({
        left: ".4rem"
    }, 1200);
    $("#part3_4").animate({
        width: "5.6rem"
    }, 800).animate({
        left: "0rem"
    }, 600).animate({
        left: ".4rem"
    }, 800);

    $(".part3_5_1").animate({
        left: '0.4rem'
    }, 1200);
}

function index4() {
    $("#part4_top_01").animate({
        left: ".4rem"
    }, 800, function() {
        $("#part4_2_1,#part4_2_3").animate({
            left: ".4rem"
        }, 1000);
        $("#part4_2_2,#part4_2_4").animate({
            left: "3.44rem"
        }, 800, function() {
            $(".part4_3").animate({
                left: ".4rem"
            }, 600, function() {
                $(".part4_4").animate({
                    left: "2.4rem"
                }, 800, function() {
                    $(".part4_5").animate({
                        left: "4.4rem"
                    }, 500, function() {
                        $("#part4_6").animate({
                            left: "1.3rem"
                        }, 800);
                    })
                })
            });
        })
    });

}

function index5() {
    $("#part5_1").animate({
        left: "0.24rem"
    }, 800);
    $("#part5_2").animate({
        right: ".24rem"
    }, 800);
    $("#part5_3").animate({
        left: "1.1rem"
    }, 800, function() {
        $("#part5_4").animate({
            left: ".5rem"
        }, 800);
        $("#part5_5").animate({
            left: "1rem"
        }, 800, function() {
            $("#part5_6_1").animate({
                left: "0.25rem"
            }, 800);
            $("#part5_6_2").animate({
                left: "2.05rem"
            }, 800);
            $("#part5_7").animate({
                left: "0.24rem"
            }, 800);
            $("#part5_8").animate({
                right: "0.2rem"
            }, 800);
        });
    });



}

$(function() {
    $('#dowebok').fullpage({
        continuousVertical: true,
        css3: true,
        fitToSection: false,
        // paddingBottom: ".5rem",
        paddingTop: ".3rem",
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],



        afterRender: function() {
            index1();
        },
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                index1();
            };
            if (index == 2) {
                index2();
            };
            if (index == 3) {
                index3();
            };
            if (index == 4) {
                index4();

            };
            if (index == 5) {
                index5();
            };

            if (index != 1) {
                $("#part1_1").css({
                    width: "0rem"
                });
                $("#part1_2_1").css({
                    left: "-5rem"
                });
                $("#part1_2_2").css({
                    right: "-5rem"
                });
                $("#part1_2_3").css({
                    left: "7rem"
                });
                $("#part1_2_4").css({
                    left: "-6rem"
                });
                $("#part1_3").css({
                    width: "0rem"
                });

                $("#part1_4").css({
                    left: "7rem"
                });
                $("#part1_5_1").css({
                    width: "0rem"
                });
                $("#part1_5_2").css({
                    width: "0rem"
                });
                $("#part1_5_3").css({
                    width: "0rem"
                });

            };
            if (index != 2) {
                $("#part2_1_1").css({
                    width: "0rem"
                });
                $("#part2_1_2").css({
                    left: "6.5rem"
                });
                $("#part2_1_2").css({
                    left: "6.5rem"
                });
                $("#part2_2").css({
                    width: "0rem"
                });
                $("#part2_3").css({
                    left: "-2.4rem"
                });
                $("#part2_4_1").css({
                    left: "-1.6rem"
                });
                $("#part2_4_2").css({
                    left: "-1.2rem"
                });
                $("#part2_4_3").css({
                    left: "7rem"
                });
                $("#part2_5").css({
                    width: "0rem"
                });

            };
            if (index != 3) {
                $("#part3_1").css({
                    left: "6.4rem"
                }, 800);
                $("#part3_2").css({
                    left: "-5.6rem"
                }, 800);
                $("#part3_3").css({
                    left: "6.4rem"
                }, 800);
                $("#part3_4").css({
                    width: "0rem"
                }, 800);
                $(".part3_5_1").css({
                    left: "6.5rem"
                });
            };
            if (index != 4) {
                $("#part4_top_01").css({
                    left: "6.4rem"
                });
                $("#part4_2_1,#part4_2_3").css({
                    left: "-2.6rem"
                });
                $("#part4_2_2,#part4_2_4").css({
                    left: "6.5rem"
                });
                $(".part4_3").css({
                    left: "6.4rem"
                });
                $(".part4_4").css({
                    left: "6.4rem"
                });
                $(".part4_5").css({
                    left: "6.4rem"
                });
                $("#part4_6").css({
                    left: "-4.3rem"
                });
            };
            if (index != 5) {
                $("#part5_1").css({
                    left: "-3rem"
                });
                $("#part5_2").css({
                    right: "-3rem"
                });
                $("#part5_3").css({
                    left: "-4.9rem"
                });
                $("#part5_4").css({
                    left: "6.5rem"
                });
                $("#part5_5").css({
                    left: "-5rem"
                });
                $("#part5_6_1").css({
                    left: "-3rem"
                });
                $("#part5_6_2").css({
                    left: "7rem"
                });
                $("#part5_7").css({
                    left: "-1.6rem"
                });
                $("#part5_8").css({
                    right: "-4.8rem"
                });
            };
        },

    })
});