// src/controllers/ctrlgustos.js
const sabores = [
    "Limón", "Limón granizado", "Ananá", "Frutilla", "Durazno",
    "Mousse de limón con frutilla", "Banana", "Frutos del bosque", 
    "Frambuesa", "Cereza a la panna", "Crema del cielo", "Tramontana", 
    "Crema americana", "Flan con dulce de leche", "Crema Oreo",
    "Crema vainilla", "Banana split", "Bananita dolca", "Crema rusa", 
    "Granizado", "San bayón con cereza", "Crema de almendras", 
    "Crema rockets", "Crema de coco", "Mantecol", "Mascarpone", 
    "Menta granizada", "Kinotos al whisky", "Sambayón", 
    "Sambayón granizado", "Frutillas a la crema", 
    "Vainilla con pasas al Rhum", "Dulce de leche con nuez", 
    "Dulce de leche", "Dulce de leche tramontana", 
    "Dulce de leche bombón", "manjar de dulce de leche", 
    "Dulce de leche granizado", "Chocolate", "Chocolate marroc", 
    "Chocolate con almendras", "Chocolate granizado", 
    "Chocolate blanco", "Chocolate con pasas al rhum", 
    "Chocolate amargo", "Chocolate Bariloche", 
    "Chocolate tentación", "Chocolate Kinder", "Mousse de chocolate"
];

exports.getSabores = (req, res) => {
    res.json(sabores);
};
