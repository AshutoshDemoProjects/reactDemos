const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}
export const getCategory = () => ([
    { id: 1, title: 'Food' },
    { id: 2, title: 'Electric' },
    { id: 3, title: 'Other' },
]);
export function updateEmployee(data) {
    let employees = getAllEmployee().filter(x => x.id !== data.id);
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
export function deleteEmployee(id) {
    let employees = getAllEmployee().filter(x => x.id !== id);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
export function addEmployee(data) {
    let employees = getAllEmployee();
    data['id'] = genrateNextEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
export function getAllEmployee() {
    if (localStorage.getItem(KEYS.employees) === null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    let categorys = getCategory();
    return employees.map(x => ({
        ...x,
        category: categorys[x.categoryId - 1].title
    }));
}
function genrateNextEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) === null)
        localStorage.setItem(KEYS.employeeId, 0);
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}