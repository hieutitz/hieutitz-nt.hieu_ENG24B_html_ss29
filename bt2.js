let products = [];

function addProduct() {
    let id = +prompt("Nhập ID sản phẩm:");
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm:");

    products.push({ id, name, price, category, quantity });
    alert("Sản phẩm đã được thêm!");
}

function displayProducts() {
    if (products.length === 0) {
        alert("Danh sách sản phẩm trống!");
        return;
    }
    let result = "Danh sách sản phẩm:\n";
    for (let product of products) {
        result += `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
    }
    alert(result);
}

function showProductById() {
    let id = +prompt("Nhập ID sản phẩm cần tìm:");
    let product = products.find(product => product.id === id);
    if (product) {
        alert(`ID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index].name = prompt("Nhập tên mới:", products[index].name);
        products[index].price = +prompt("Nhập giá mới:", products[index].price);
        products[index].category = prompt("Nhập danh mục mới:", products[index].category);
        products[index].quantity = +prompt("Nhập số lượng mới:", products[index].quantity);
        alert("Sản phẩm đã được cập nhật!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function deleteProduct() {
    let id = +prompt("Nhập ID sản phẩm cần xóa:");
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        alert("Sản phẩm đã được xóa!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function checkprice() {
    let minPrice = +prompt("Nhập giá thấp nhất:");
    let maxPrice = +prompt("Nhập giá cao nhất:");
    let checkprice = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (checkprice.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này!");
    } else {
        let result = "Sản phẩm trong khoảng giá:\n";
        for (let product of checkprice) {
            result += `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}\n`;
        }
        alert(result);
    }
}

let choice;
do {
    choice = prompt("Chọn chức năng:\n1. Thêm sản phẩm\n2. Hiển thị tất cả sản phẩm\n3. Xem chi tiết sản phẩm\n4. Cập nhật sản phẩm\n5. Xóa sản phẩm\n6. Lọc sản phẩm theo khoảng giá\n7. Thoát");
    switch (choice) {
        case "1":
            addProduct();
            break;
        case "2":
            displayProducts();
            break;
        case "3":
            showProductById();
            break;
        case "4":
            updateProduct();
            break;
        case "5":
            deleteProduct();
            break;
        case "6":
            checkprice();
            break;
        case "7":
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (choice !== "7");
