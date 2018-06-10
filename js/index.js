// $(function(){
// 	$('.st0').each(function(i){
// 		var $this = $(this);
// 		var path = this;
// 		var len = path.getTotalLength();
//     console.log(len);
//     if(len < 1000){
//       $(this).css("stroke","none");
//     }
// 	});
// });

window.onload = function() {
  $('.st0').css("display","block");
  $('.t_logo').css("display","inline");

  // $('.glitch').hover(
  //   function() {
  //     console.log("on");
  //     clearRandomEffect;
  //   },
  //   function() {
  //     console.log("out");
  //     randomEffect;
  // });

  // randomEffect();
}


$(function() {
    $('#pagepiling').pagepiling({
        touchSensitivity: 10,
        menu: '#nav',
        scrollingSpeed: 100,
        sectionSelector: '.section',
        anchors: ['top', 'about', 'movie', 'busho', 'welcome_to_geikosai2018'],
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',

        },
    });
});

$(function(){

//グローバル変数
var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
var modalClassSyncer = "modal-syncer" ;		//モーダルを開くリンクに付けるクラス名

//モーダルのリンクを取得する
var modals = document.getElementsByClassName( modalClassSyncer ) ;

//モーダルウィンドウを出現させるクリックイベント
for(var i=0,l=modals.length; l>i; i++){

	//全てのリンクにタッチイベントを設定する
	modals[i].onclick = function(){

		//ボタンからフォーカスを外す
		this.blur() ;

		//ターゲットとなるコンテンツを確認
		var target = this.getAttribute( "data-target" ) ;

		//ターゲットが存在しなければ終了
		if( typeof( target )=="undefined" || !target || target==null ){
			return false ;
		}

		//コンテンツとなる要素を取得
		nowModalSyncer = document.getElementById( target ) ;

		//ターゲットが存在しなければ終了
		if( nowModalSyncer == null ){
			return false ;
		}

		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない
		//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する

		//オーバーレイを出現させる
		// $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#section4" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "fast" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer() ;

		//コンテンツをフェードインする
		$( nowModalSyncer ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay,#modal-close" ).unbind().click( function() {

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#" + target + ",#modal-overlay" ).fadeOut( "fast" , function() {

				//[#modal-overlay]を削除する
				$( '#modal-overlay' ).remove() ;

			} ) ;

			//現在のコンテンツ情報を削除
			nowModalSyncer = null ;

		} ) ;

	}

}

	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//モーダルウィンドウが開いてなければ終了
		if( nowModalSyncer == null ) return false ;

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		//コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( nowModalSyncer ).outerWidth( {margin:true} ) ;
//		var ch = $( nowModalSyncer ).outerHeight( {margin:true} ) ;
		var cw = $( nowModalSyncer ).outerWidth() ;
		var ch = $( nowModalSyncer ).outerHeight() ;

		//センタリングを実行する
		// $( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;


var locationHashChanged = function(){

  if(location.hash=="#about"){
    $(".parallelogram").addClass("s2ActiveParallelogram");
  }else{
    $(".parallelogram").removeClass("s2ActiveParallelogram");
  }

  if(location.hash=="#movie"){
    $(".parallelogram").addClass("s3ActiveParallelogram");
    $(".bg").addClass("s3ActiveBg");
  }else{
    $(".parallelogram").removeClass("s3ActiveParallelogram");
    $(".bg").removeClass("s3ActiveBg");
  }

  if(location.hash=="#busho"){
    $(".parallelogram").addClass("s4ActiveParallelogram");
    $(".bg").addClass("s4ActiveBg");
  }else{
    $(".parallelogram").removeClass("s4ActiveParallelogram");
    $(".bg").removeClass("s4ActiveBg");
  }

  if(location.hash=="#welcome_to_geikosai2018"){
    $(".parallelogram").addClass("s5ActiveParallelogram");
    $(".bg").addClass("s5ActiveBg");
  }else{
    $(".parallelogram").removeClass("s5ActiveParallelogram");
    $(".bg").removeClass("s5ActiveBg");
  }
}

// var p_random = 0;
// var p_random2 = 10;
//
// var randomEffect = function(){
//   randomEffect = setInterval(function(){
//     $('.glitch').eq(p_random).removeClass('activeGlitch');
//     $('.glitch').eq(p_random2).removeClass('activeGlitch');
//     var random = Math.floor(Math.random() * 20);
//     var random2 = Math.floor(Math.random() * 20);
//     if(random == random2){
//       if(random != 0){
//         random -= 1;
//       }else{
//         random += 19;
//       }
//     }
//
//     p_random = random;
//     p_random2 = random2;
//
//     $('.glitch').eq(random).addClass('activeGlitch');
//     $('.glitch').eq(random2).addClass('activeGlitch');
//   },2000);
// }
//
// var clearRandomEffect = function(){
//   console.log("okk");
//   clearInterval(randomEffect);
// }

window.location.hash = "top";
window.onhashchange = locationHashChanged;
