global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
});

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');

    });
});

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para espacios descomenta el test a
    // continuación.
    //
    describe('cipher.encode', () => {
      it('debería retornar "ORV HVSDFLRV" para "LOS ESPACIOS" with offset 3', () => {
        expect(cipher.encode('LOS ESPACIOS', 3)).toBe('ORV HVSDFLRV');
      });
    });
      // Hacker edition
      //
      // [Español]
      // Si decides implementar soporte para caracteres no alfabéticos descomenta
      // el test a continuación.
      //
      //
      // it('debería retornar " !@" para " !@"', () => {
      //   expect(cipher.encode(33, ' !@')).toBe(' !@');
      // });

    describe('cipher.decode', () => {
      it('debería ser una función', () => {
        expect(typeof cipher.decode).toBe('function');
      });
      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
        expect(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33)).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      });
    });
      //
      // Hacker edition
      //
      // [Español]
      // Si decides agregar soporte para espacios descomenta el test a
      // continuación.
      //
      //
      describe('cipher.decode', () => {
      it('debería retornar "LOS ESPACIOS" para "ORV HVSDFLRV" with offset 3', () => {
         expect(cipher.decode('ORV HVSDFLRV', 3)).toBe('LOS ESPACIOS');
       });
});
      // Hacker edition
      //
      // [Español]
      // Si decides implementar soporte para caracteres no alfabéticos descomenta
      // el test a continuación.
      //
      //
      // it('debería retornar " !@" para " !@"', () => {
      //   expect(cipher.decode(33, ' !@')).toBe(' !@');
      // });
      //});
    //});
