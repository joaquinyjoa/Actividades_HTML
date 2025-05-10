class Punto
{
    #x;
    #y;

    constructor(x,y)
    {
        if (typeof x !== 'number' || typeof y !== 'number')
        {
            throw new TypeError("El nombre debe ser una cadena de texto (string).");
        }
        
        this.#x = x;
        this.#y = y;
        
    }

    get x()
    {
        return this.#x;
    }

    get y()
    {
        return this.#y;
    }

}