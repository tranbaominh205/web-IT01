const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const suggestionsContainer = document.getElementById('suggestions');
const chatOverlay = document.getElementById('chatOverlay');
const openChatBtn = document.getElementById('openChatBTN');
const closeChatBtn = document.getElementById('closeChatBTN');

// Các câu hỏi và câu trả lời có sẵn
const questionAndAnswer = {
    "chào": "Chào bạn! Tôi có thể giúp gì cho bạn?",
    "cảm ơn": "Tôi rất vui khi được nói chuyện với bạn",
    "mở cửa": "Trường mở cửa lúc 7 giờ sáng.",
    "thành lập": "Trường THPT này được thành lập vào năm 1998.",
    "địa chỉ": "Trường nằm tại Khu dân cư Nhơn Đức, Nhà Bè, Hồ Chí Minh",
    "bao nhiêu giáo viên": "Hiện tại, trường có khoảng 100 giáo viên giàu kinh nghiệm.",
    "bao nhiêu học sinh": "Trường có hơn 2000 học sinh từ lớp 10 đến lớp 12.",
    "bao nhiêu lớp học": "Trường có tổng cộng 45 lớp học, từ lớp 10 đến lớp 12.",
    "chương trình đặc biệt": "Trường có các chương trình học nâng cao cho học sinh giỏi và các câu lạc bộ học thuật.",
    "hoạt động ngoại khóa": "Trường tổ chức nhiều hoạt động ngoại khóa như thể thao, văn nghệ, câu lạc bộ khoa học.",
    "ký túc xá": "Hiện tại, trường không có ký túc xá cho học sinh.",
    "Cơ sở vật chất": "Trường có phòng học hiện đại, phòng thí nghiệm, thư viện và sân thể thao rộng rãi.",
    "phòng thí nghiệm": "Trường có các phòng thí nghiệm hiện đại cho môn Hóa học, Vật lý và Sinh học.",
    "Thư viện": "Thư viện của trường có hơn 10,000 đầu sách đa dạng các thể loại.",
    "tiếng Anh": "Trường có chương trình học tiếng Anh cơ bản và nâng cao cho học sinh.",
    "trường đại học": "Trường có các chương trình liên kết với một số trường đại học hàng đầu trong nước.",
    "Học phí": "Học phí sẽ được thông báo khi đăng ký nhập học. Liên hệ với văn phòng trường để biết thêm chi tiết.",
    "Làm thế nào để đăng ký vào trường?": "Bạn có thể đăng ký vào trường bằng cách đến văn phòng tuyển sinh hoặc đăng ký trực tuyến qua trang web của trường."
    ,"học bổng": "Trường có các chương trình học bổng cho học sinh giỏi và học sinh có hoàn cảnh khó khăn.",
    "môn học": "Trường giảng dạy các môn học cơ bản như Toán, Văn, Anh, Lý, Hóa, Sinh, Sử, Địa, GDCD, và Tin học.",
    "câu lạc bộ": "Trường có nhiều câu lạc bộ như Câu lạc bộ Văn học, Câu lạc bộ Khoa học, Câu lạc bộ Âm nhạc, và Câu lạc bộ Thể thao.",
    "kỳ thi": "Các kỳ thi giữa kỳ và cuối kỳ được tổ chức hàng năm theo lịch học của Sở Giáo dục và Đào tạo.",
    "dã ngoại": "Có, trường thường xuyên tổ chức các chuyến dã ngoại và học tập ngoại khóa cho học sinh.",
    "giáo dục": "Trường áp dụng chương trình giảng dạy tiên tiến, kết hợp học lý thuyết và thực hành, giúp học sinh phát triển toàn diện.",
    "sân thể thao": "Trường có một sân thể thao rộng lớn cho học sinh chơi bóng đá, bóng rổ và các hoạt động thể thao khác.",
    "lễ kỷ niệm": "Trường tổ chức nhiều ngày lễ kỷ niệm như Ngày Nhà giáo Việt Nam, Ngày Quốc tế Phụ nữ và các sự kiện truyền thống của trường.",
    "Phụ huynh có thể tham gia vào các hoạt động của trường": "Phụ huynh được khuyến khích tham gia vào các hoạt động của trường và đóng góp ý kiến cho sự phát triển của nhà trường.",
    "hỗ trợ tâm lý": "Có, trường có bộ phận tư vấn tâm lý để hỗ trợ học sinh khi gặp khó khăn.",
    "Thời gian học tập": "Học sinh học từ thứ Hai đến thứ Sáu, với các tiết học từ 7h00 đến 16h30.",
    "Thời gian nghỉ hè": "Nghỉ hè của trường thường bắt đầu vào tháng 6 và kết thúc vào đầu tháng 8.",
    "nhà ăn": "Có, trường có một nhà ăn phục vụ các bữa ăn sáng, trưa và chiều cho học sinh.",
    "Các kỳ thi học kỳ": "Trường tổ chức hai kỳ thi học kỳ, một vào tháng 12 và một vào tháng 5.",
    "Lễ khai giảng": "Lễ khai giảng năm học mới thường được tổ chức vào đầu tháng 9.",
    "Hỗ trợ học tập": "Trường có các buổi học phụ đạo và hướng dẫn làm bài tập cho học sinh gặp khó khăn.",
    "Thời gian nghỉ giữa giờ": "Học sinh có 10 phút nghỉ giữa mỗi tiết học và 20 phút nghỉ giữa giờ trưa.",
    "Ngày hội thể thao": "Trường tổ chức ngày hội thể thao hàng năm vào tháng 11.",
    "Buổi hướng nghiệp": "Các buổi hướng nghiệp được tổ chức định kỳ để giúp học sinh định hướng nghề nghiệp tương lai.",
    "Câu lạc bộ nghệ thuật": "Trường có câu lạc bộ nghệ thuật với các hoạt động như vẽ, múa, và nhạc kịch.",
    "Ngày hội sách": "Ngày hội sách được tổ chức mỗi năm một lần để khuyến khích học sinh đọc sách và yêu thích văn học.",
    "Chương trình giao lưu văn hóa": "Trường có chương trình giao lưu văn hóa với các trường quốc tế, giúp học sinh mở rộng hiểu biết về các nền văn hóa khác.",
    "Chương trình học tăng cường": "Trường có các lớp học tăng cường cho học sinh giỏi và các môn học đặc thù.",
    "Hoạt động từ thiện": "Trường thường tổ chức các hoạt động từ thiện để giúp đỡ cộng đồng và người có hoàn cảnh khó khăn.",
    "tên bạn": "Tôi là chatbot, luôn sẵn sàng giúp bạn!",
    "Thời tiết": "Xin lỗi, tôi không thể kiểm tra thời tiết hiện tại, nhưng bạn có thể dùng ứng dụng thời tiết trên điện thoại.",
    "thích ăn uống": "Tôi là một chatbot, nên tôi không ăn uống, nhưng tôi có thể gợi ý cho bạn những món ngon!",
    "chuyện cười": "Tôi biết một vài câu chuyện cười đấy! Ví dụ: Tại sao con gà băng qua đường? Để sang bên kia đường!",
    "rảnh rỗi?": "Khi rảnh rỗi, tôi thường tìm kiếm thêm thông tin để có thể trả lời tốt hơn những câu hỏi của bạn!",
    "du lịch": "Nếu tôi có thể, tôi muốn du lịch khắp thế giới qua những câu chuyện của bạn!",
    "cảm thấy": "Cảm ơn bạn đã hỏi! Tôi luôn sẵn sàng và vui vẻ để giúp bạn.",
    "âm nhạc": "Tôi rất thích âm nhạc! Nó mang lại niềm vui và thư giãn.",
    "Bạn thích màu gì": "Tôi thích mọi màu sắc, mỗi màu đều có vẻ đẹp riêng!",
    "câu đố": "Chắc chắn rồi! Câu đố đây: Điều gì càng nhiều thì càng nhẹ?",
    "nấu ăn": "Tôi không thể nấu ăn, nhưng tôi có thể chia sẻ với bạn các công thức nấu ăn tuyệt vời!",
    "xem phim": "Tôi không xem phim, nhưng tôi nghe nói những bộ phim về tình bạn rất cảm động!",
    "bài hát": "Tôi biết một số bài hát phổ biến. Bạn có muốn tôi gợi ý một bài hát vui vẻ không?"
};

// Các gợi ý cho người dùng
const suggestions = [
    "Xin chào", 
    "Trường mở cửa lúc mấy giờ?",
    "Trường nằm ở địa chỉ nào?",
    "Trường được thành lập từ năm nào?",
    "Trường có bao nhiêu giáo viên?",
    "Có bao nhiêu học sinh trong trường?",
    "Trường có học bổng không?"
    // Các gợi ý khác...
];

// Tạo các gợi ý trên giao diện
suggestions.forEach(question => {
    const suggestionElement = document.createElement('div');
    suggestionElement.textContent = question;
    suggestionElement.className = 'suggestion';
    suggestionElement.onclick = () => handleSuggestionClick(question);
    suggestionsContainer.appendChild(suggestionElement);
});

// Xử lý khi người dùng nhấp vào gợi ý
function handleSuggestionClick(question) {
    addMessageToChat("Bạn: " + question);
    const botReply = getBotReply(question);
    setTimeout(() => {
        addMessageToChat("Bot: " + botReply);
    }, 500);
}

// Xử lý khi người dùng nhập câu hỏi và nhấn gửi
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    addMessageToChat("Bạn: " + userMessage);
    userInput.value = '';
    const botReply = getBotReply(userMessage);
    setTimeout(() => {
        addMessageToChat("Bot: " + botReply);
    }, 500);
}

// Lấy câu trả lời của bot dựa trên từ khóa
function getBotReply(message) {
    const messageLower = message.toLowerCase();
    for (const keyword in questionAndAnswer) {
        if (messageLower.includes(keyword.toLowerCase())) {
            return questionAndAnswer[keyword];
        }
    }
    return "Xin lỗi, tôi không hiểu câu hỏi của bạn.";
}

// Hàm thêm tin nhắn vào chat
function addMessageToChat(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Hiển thị chatbox khi nhấp vào ảnh và ẩn ảnh mở chatbox
openChatBtn.onclick = function() {
    chatOverlay.style.display = 'flex';
    openChatBtn.style.display = 'none'; // Ẩn ảnh mở chatbox
};

// Đóng chatbox khi nhấp vào nút 'X' và hiển thị lại ảnh mở chatbox
closeChatBtn.onclick = function() {
    chatOverlay.style.display = 'none';
    openChatBtn.style.display = 'block'; // Hiển thị lại ảnh mở chatbox
};
