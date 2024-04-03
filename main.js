// ข้อมูลผู้ประกอบการ
const businesses = [
    { id: 1, name: "ผู้ประกอบการ 1", expertise: ["Marketing", "Back-End"] },
    { id: 2, name: "ผู้ประกอบการ 2", expertise: ["Data Analysis", "Tester"], },
    { id: 3, name: "ผู้ประกอบการ 3", expertise: ["Font-End", "UX/UI"] },
    { id: 4, name: "ผู้ประกอบการ 4", expertise: ["Font-End", "Back-End"] },
];

// ข้อมูลนักศึกษา
const interns = [
    { id: 1, name: "นักศึกษา 1", skills: ["Marketing", "Font-End"] },
    { id: 2, name: "นักศึกษา 2", skills: ["Data Analysis", "Tester"] },
    { id: 3, name: "นักศึกษา 3", skills: ["Back-End", "UX/UI"] },
    { id: 4, name: "นักศึกษา 4", skills: ["Back-End", "Font-End"] },
];

// แสดงรายชื่อผู้ประกอบการ
function displayBusinesses() {
    const businessList = document.getElementById("businessList");
    let html = "";
    businesses.forEach((business) => {
        html += `<div>${business.name} - ทักษะ: ${business.expertise.join(
            ", "
        )}</div>`;
    });
    businessList.innerHTML = html;
}

// แสดงรายชื่อนักศึกษา
function displayInterns() {
    const internList = document.getElementById("internList");
    let html = "";
    interns.forEach((intern) => {
        html += `<div>${intern.name} - ทักษะ: ${intern.skills.join(
            ", "
        )}</div>`;
    });
    internList.innerHTML = html;
}

// ฟังก์ชันจับคู่
function matchBusinessWithIntern() {
    const matches = [];
    businesses.forEach((business) => {
        interns.forEach((intern) => {
            const commonSkills = business.expertise.filter((skill) =>
                intern.skills.includes(skill)
            );
            if (commonSkills.length > 0) {
                matches.push({
                    business: business.name,
                    intern: intern.name,
                    commonSkills: commonSkills,
                });
            }
        });
    });
    return matches;
}

// แสดงผลจากการจับคู่
function displayMatches() {
    displayBusinesses();
    displayInterns();
    const matches = matchBusinessWithIntern();
    const resultContainer = document.getElementById("result");

    let html = `<h2 class="text-2xl font-semibold">ผลการจับคู่</h2>`;
    matches.forEach((match) => {
        html += `<div class="flex py-1"><span class="font-bold">${match.business
            }</span> <p class="text-red-500 mx-2">จับคู่กับ</p> <span class="font-bold">${match.intern
            } ทักษะที่เหมือนกัน: ${match.commonSkills.join(", ")}</span></div>`;
    });

    resultContainer.innerHTML = html;
}

// แสดงรายชื่อเมื่อโหลดหน้าเว็บครั้งแรก
window.onload = function () {
    displayBusinesses();
    displayInterns();
};