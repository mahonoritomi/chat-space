$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      let html = 
      `<div class="Chat-main__message__box" data-message-id=${message.id}>
        <div class="Chat-main__message__box__info">
          <div class="Chat-main__message__box__info__user-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message__box__content">
          <div class="Chat-main__message__box__content__text">
            ${message.body}
          </div>
          <img class="Chat-main__message__box__content__image" src="${message.image}">
        </div>
      </div>`//メッセージに画像が含まれる場合のHTMLを作る
      return html;
    } else {
      let html = 
      `<div class="Chat-main__message__box" data-message-id=${message.id}>
        <div class="Chat-main__message__box__info">
          <div class="Chat-main__message__box__info__user-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message__box__content">
          <div class="Chat-main__message__box__content__text">
            ${message.body}
          </div>
        </div>
      </div>`//メッセージに画像が含まれない場合のHTMLを作る
      return html;
    }
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html);
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      $('.Chat-main__footer__form')[0].reset();
      $('.Chat-main__footer__form__send-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  // let reloadMessages = function() {
  //   let last_message_id = $('.MessageBox:last').data("message-id");
  //   $.ajax({
  //     url: "api/messages",
  //     type: 'get',
  //     dataType: 'json',
  //     data: {id: last_message_id}
  //   })
  //   .done(function(messages) {
  //     if (messages.length !== 0) {
  //       let insertHTML = '';
  //       $.each(messages, function(i, message) {
  //         insertHTML += buildHTML(message)
  //       });
  //       $('.Chat-main__message').append(insertHTML);
  //       $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
  //     }
  //   })
  //   .fail(function() {
  //     alert('error');
  //   });
  // };
  // setInterval(reloadMessages, 7000);
});

