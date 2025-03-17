let contacts = [];

function addContact() {
    let id = +prompt("Nhập ID:");
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");
    contacts.push({ id, name, email, phone });
    alert("Thêm liên hệ thành công!");
}

function displayContacts() {
    if (contacts.length === 0) {
        alert("Danh bạ trống!");
    } else {
        let result = "Danh sách liên hệ:\n";
        for (let i = 0; i < contacts.length; i++) {
            result += `ID: ${contacts[i].id}, Tên: ${contacts[i].name}, Email: ${contacts[i].email}, SĐT: ${contacts[i].phone}\n`;
        }
        alert(result);
    }
}

function searchContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let found = contacts.find(contact => contact.phone === phone);
    if (found) {
        alert(`ID: ${found.id}, Tên: ${found.name}, Email: ${found.email}, SĐT: ${found.phone}`);
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function updateContact() {
    let id = +prompt("Nhập ID liên hệ cần cập nhật:");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts[index].name = prompt("Nhập tên mới:");
        contacts[index].email = prompt("Nhập email mới:");
        contacts[index].phone = prompt("Nhập số điện thoại mới:");
        alert("Cập nhật thành công!");
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function deleteContact() {
    let id = +prompt("Nhập ID liên hệ cần xóa:");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Xóa liên hệ thành công!");
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

let choice;
do {
    choice = prompt(
        "Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm kiếm theo SĐT\n4. Cập nhật theo ID\n5. Xóa theo ID\n6. Thoát"
    );

    switch (choice) {
        case "1":
            addContact();
            break;
        case "2":
            displayContacts();
            break;
        case "3":
            searchContact();
            break;
        case "4":
            updateContact();
            break;
        case "5":
            deleteContact();
            break;
        case "6":
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (choice !== "6");
