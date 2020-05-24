$(document).ready(function(){
	$('#p-submit').click(function(){ //글등록 버튼 눌렀을 떄 처리해주는 함수::ajax 처리 
		
	});
	
	$('#book-search').click(function(){ //글쓰기 모달에서 읽은 도서 검색 클릭시 처리해주는 함수 
		//검색결과를 modal 로 띄워줄 수 있도록 한다.
		$('#-s-b-modal').css('display', 'block');
		
		//입력한 검색어를 변수에 저장한다.
		var book = $('#findBook').val();
		alert(book);
		
		$.ajax({
			url : '/BookNet/ajax/searchBook.cls',
			type : 'GET',
			dataType : 'json',
			data : {
				'searchWord' : book
			},
			success : function(obj){ //obj는 ArrayList형태이다.
				alert(obj);
				//json type array 처리구문 
				$.each(obj, function(index, item){
					var title = item.getTitle();
					alert(title);
				})
			},
			error : function(request, status, error){
				console.log("code : " + request.status + "\n message : " + request.responseText	+ "\n error : " + error);
			}
		});
	});
});