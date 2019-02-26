class Collider
{
    constructor(transform, bounds)
    {
        this.transform = transform;
        this.bounds = bounds;

        this.shown = false;
    }

    Update()
    {
       this.position = 
       {
           x: (this.transform.position.x - camera.transform.position.x),
           y: (this.transform.position.y - camera.transform.position.y)
       }
       if(this.shown) this.Draw();
    }

    ToggleShown()
    {
        this.shown = !this.shown;
    }

    Draw(color = "white", width = 1)
    {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(this.bounds[0] + this.position.x, this.bounds[1] + this.position.y);
        for( let i = 2; i < this.bounds.length; i += 2)
        {
            ctx.lineTo(this.bounds[i] + this.position.x, this.bounds[i+1] + this.position.y);
        }
        ctx.lineTo(this.bounds[0] + this.position.x, this.bounds[1] + this.position.y);

        ctx.stroke();
    }

    IsColliding(other)
    {        
        for( let i = 0; i < this.bounds.length; i += 4)
        {
            for( let j = 0; j < other.bounds.length; j += 4)
            {

                //denom = ((LineB2.Y – LineB1.Y) * (LineA2.X – LineA1.X)) – ((LineB2.X – LineB1.X) * (LineA2.Y - LineA1.Y));

                var denom = ((other.bounds[j+3] - other.bounds[j+1])*(other.bounds[i+2] - other.bounds[i])) 
                - ((other.bounds[j+3] - other.bounds[j]) *(other.bounds[i+3] - other.bounds[i+1]));
                console.log(denom);

                if (denom != 0)
                {

                }
            }
        }
        return null;
    }
}