
// Comandos de entrada e saida
import java.util.Scanner;

public class Aula3 {
    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        int idade = leitor.nextInt();
        float cotacaoDollar = leitor.nextFloat();
        double cotacaoEuro = leitor.nextDouble();
        String nome = leitor.nextLine();
        String codigoRua = leitor.next();

        System.out.println("Comando de saida - pula linha");
        System.out.print("Comando de saida - matem linha");
    }
}
