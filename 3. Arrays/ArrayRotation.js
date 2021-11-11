function rotate(a, n)
{
    while(n > 0) {
        let x = a[0];
        a.splice(0, 1); //deletes an item(index, number of items to be deleted);
        a.push(x); //equal to a[a.length - 1] = x;
        n--;
    }
    console.log(a.join(' '));
}
rotate([51, 47, 32, 61, 21], 2);