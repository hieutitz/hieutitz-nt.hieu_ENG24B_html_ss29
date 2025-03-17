let menu = {};

function addDish() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let description = prompt("Nhập mô tả món ăn:");
    menu[category].push({ name, price, description });
    alert("Món ăn đã được thêm!");
}

function deleteDish() {
    let category = prompt("Nhập danh mục chứa món ăn:");
    let name = prompt("Nhập tên món ăn cần xóa:");
    let index = menu[category].findIndex(dish => dish.name === name);
    if (index !== -1) {
        menu[category].splice(index, 1);
        alert("Món ăn đã được xóa!");
    } else {
        alert("Không tìm thấy món ăn!");
    }
}

function updateDish() {
    let category = prompt("Nhập danh mục chứa món ăn:");
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let index = menu[category].findIndex(dish => dish.name === name);
    if (index !== -1) {
        menu[category][index].name = prompt("Nhập tên mới:", menu[category][index].name);
        menu[category][index].price = +prompt("Nhập giá mới:", menu[category][index].price);
        menu[category][index].description = prompt("Nhập mô tả mới:", menu[category][index].description);
        alert("Món ăn đã được cập nhật!");
    } else {
        alert("Không tìm thấy món ăn!");
    }
}

function displayMenu() {
    let result = "Menu nhà hàng:\n";
    for (let category in menu) {
        result += `Danh mục: ${category}\n`;
        for (let dish of menu[category]) {
            result += `Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}\n`;
        }
    }
    alert(result);
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let found = [];
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            found.push(`Danh mục: ${category}, Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
        } else {
            alert("Không tìm thấy món ăn!");
            return;
        }
    }
    alert(found);
}

let choice;
do {
    choice = prompt("Chọn chức năng:\n1. Thêm món ăn\n2. Xóa món ăn\n3. Cập nhật món ăn\n4. Hiển thị menu\n5. Tìm kiếm món ăn\n6. Thoát");
    switch (choice) {
        case "1":
            addDish();
            break;
        case "2":
            deleteDish();
            break;
        case "3":
            updateDish();
            break;
        case "4":
            displayMenu();
            break;
        case "5":
            searchDish();
            break;
        case "6":
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (choice !== "6");
