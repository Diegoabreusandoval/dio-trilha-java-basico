import java.util.Scanner;

public class Ex4_ParEImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
    
    
        Int quantNumeros;
        
        System.out.println("Quantidade de números: ");
        
        quantNumeros = scan.nextInt();

        Int count =0;
        do {
             System.out.println("Número: ");
             numero = scan .nextInt();
             
               count++;
           }  while(count < quantNumeros);
    
    
        } 
    
}
