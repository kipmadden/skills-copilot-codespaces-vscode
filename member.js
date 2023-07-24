function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberActive = document.getElementById("memberActive");
    var skillsActive = document.getElementById("skillsActive");
    member.style.display = "block";
    skills.style.display = "none";
    memberActive.style.borderBottom = "2px solid #fff";
    skillsActive.style.borderBottom = "2px solid #ccc";
}