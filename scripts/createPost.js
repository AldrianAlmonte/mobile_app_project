let currentPage = 1;

function changePage(id) {
    if (id < 1 || id > 5)
        return;
    currentPage = id;
}

function pageBack() {
    changePage(currentPage - 1);
}
