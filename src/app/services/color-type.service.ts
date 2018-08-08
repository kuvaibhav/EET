export class ColorTypeService {
  types = [
    {
      name: 'btn-primary',
      color: 'Blue',
      addName: 'btn-warning',
      addColor: 'Yellow'
    },
    {
      name: 'btn-secondary',
      color: 'Gray',
      addName: 'btn-info',
      addColor: 'Cyan'
    },
    {
      name: 'btn-success',
      color: 'Green',
      addName: 'btn-light',
      addColor: 'White'
    },
    {
      name: 'btn-danger',
      color: 'Red',
      addName: 'btn-dark',
      addColor: 'Black'
    }
  ];

  addType(name: string, color: string) {
    this.types.push({name: name, color: color, addName: '', addColor: ''});
  }
}
