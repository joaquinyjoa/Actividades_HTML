class Rectangulo extends Punto
{
    #vertice1;
    #vertice2;
    #vertice3;
    #vertice4;
    #area;
    #perimetro;
    #ladoUno;
    #ladoDos;

    constructor(vertice1, vertice3)
    {
        super(vertice1.x, vertice3.y);

        this.#vertice1 = vertice1;
        this.#vertice3 = vertice3;

        // Calculamos los otros dos vértices
        this.#vertice2 = new Punto(vertice3.x, vertice1.y); // Inferior Derecho
        this.#vertice4 = new Punto(vertice1.x, vertice3.y); // Superior Izquierdo

        this.#ladoUno = Math.abs(vertice3.x - vertice1.x);
        this.#ladoDos = Math.abs(vertice3.y - vertice1.y);
    }

    get area()
    {
        return this.#ladoUno * this.#ladoDos;
    }

    get perimetro() 
    {
        return 2 * (this.#ladoUno + this.#ladoDos);
    }

    toString() {
        return `Rectángulo: \n` +
               `Vértice 1: ${this.x}, ${this.y}\n` +
               `Vértice 2: ${this.#vertice2.x}, ${this.#vertice2.y}\n` +
               `Vértice 3: ${this.#vertice4.x}, ${this.#vertice4.y}\n` +
               `Área: ${this.#area} \n` +
               `Perímetro: ${this.#perimetro}`;
    }
}

const v1 = new Punto(0, 0);  // Vértice 1
const v3 = new Punto(4, 3);  // Vértice 3
const rectangulo = new Rectangulo(v1, v3);

console.log(rectangulo.toString());