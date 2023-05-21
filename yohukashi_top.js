  // ローダー終了
  function end_loader() {
    $('.loader').fadeOut(600);
  }
  // テキスト表示
  function show_txt() {
    $('.loader .loadimg').fadeIn(300);
  }
  // テキスト非表示
  function hide_txt() {
    $('.loader .loadimg').fadeOut(300);
  }

  // タイマー処理
  $(window).on('load', function () {
    // 処理①
    setTimeout(function () {
      show_txt();
    }, 200)
    // 処理②
    setTimeout(function () {
      hide_txt();
    }, 2000)
    // 処理③
    setTimeout(function () {
      end_loader();
    }, 2500)
  })

  //スクロールをしたら1度だけアニメーションをする設定
  $('.fadeInTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeIn');//クラス名が付与
    }
  });

  // スクロールすると表示される
$windowWidth = window.innerWidth;
$breakPointA = 600;

isMobileSize = ($windowWidth < $breakPointA);
isPcSize = ($windowWidth > $breakPointA);


if (isPcSize) {

function accordion_change(accordion){
  $('.accordion_one .accordion_header').removeClass('close');
  $('.accordion_empty').removeClass('hide');

      if($('.accordion_one .accordion_header').hasClass('open')){
          $('.accordion_one .accordion_header').not(accordion).addClass('close');
          $('.accordion_empty').addClass('hide');
      }
  }

$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.accordion_one .accordion_header').click(function(){

      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
      $(this).next().animate({width:'toggle'});
      $(this).toggleClass('open');
      //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
      $('.accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
      $('.accordion_one .accordion_header').not($(this)).removeClass('open');
      // $(this).next().animate({width:'toggle'},
      // {complete:function(){accordion_change($(this));}
      // });
      accordion_change($(this));
    });
  });
  
  $(function(){
    //.accordion_oneの中の.accordion_innerがクリックされたら
    $('.accordion_one .accordion_inner').click(function(){

      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
      $(this).next().animate({width:'toggle'});
      $(this).toggleClass('open');
      $('.accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
      $('.accordion_one .accordion_header').not($(this)).removeClass('open');

      $('.accordion_one .accordion_header').removeClass('close');
      $('.accordion_empty').removeClass('hide');
    });
  });

}

// グローバルメニュー
$(function(){
  $('.MenuBtn').on('click', function(){
    $('.Menu').toggleClass('is-active');
    $('.MenuBtn').toggleClass('isClosed');
  });
});

// else if (isMobileSize) {
