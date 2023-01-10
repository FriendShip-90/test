$(document).ready(function () {
  // 셀렉트
  $(".default_option").click(function () {
    $(this).parent().toggleClass("active");
  });
  $(".select_ul li").click(function () {
    var currentele = $(this).text();
    console.log(currentele);
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
  });

  $(".inp").focus(function () {
    let a = $(this).parent("label").addClass("active");
  });
  $(".inp").focusout(function () {
    let a = $(this).parent("label").removeClass("active");
  });

  // 리스트형태
  $(".middleBar-item").click(function () {
    let $class = $(this).data("class");
    $(".middleBar-item").removeClass("active");
    $(this).addClass("active");
    $(".inquiry-list").removeClass("colum1 colum2 colum3");
    $(".inquiry-list").addClass($class);
  });

  $('.chkList label').click (function() {
    let $this = $(this)
    let $input = $this.parent('li').find('input[type="checkbox"]')
    let inpChk = $input.is(':checked')
    $("input:checkbox").prop("checked", false);    
    if( inpChk ) $input.prop("checked", true);
  })

  // 금융상품선택 시 세부상담내역 활성화
  $('.interest-item label').click( function(e){
    let thisData = $(this).parent('li').find('input')
    if ( e.target.innerText == '금융상품') {
      if( thisData.attr('data-chk') === 'true' ){
        $('.detailed-list').css({'display': 'flex'})
        thisData.attr('data-chk', 'false')
      }else{
        $('.detailed-list').css({'display': 'none '})
        thisData.attr('data-chk', 'true')
      }
    }
  })

  $('.mo-header').click( function (){
    console.log(555);
  })


});

