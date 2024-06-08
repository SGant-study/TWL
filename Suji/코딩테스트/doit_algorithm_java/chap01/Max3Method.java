package doit_algorithm_java.chap01;

public class Max3Method { // 3개의 정수값 가운데 최대값을 (메서드로)구하여 출력

    static int max3(int a, int b, int c) {

        int max = a; // 최대값

        if (b > max)
            max = b;
        if (c > max)
            max = c;

        return max;
        // 구한 최대값을 호출한 곳으로 반환
    }

    public static void main(String[] args) {

        System.out.println("max3(3, 2, 1) = " + max3(3, 2, 1)); // a > b > c
        System.out.println("max3(3, 2, 2) = " + max3(3, 2, 2)); // a > b = c
        System.out.println("max3(3, 1, 2) = " + max3(3, 1, 2)); // a > c > b
        System.out.println("max3(3, 2, 3) = " + max3(3, 2, 3)); // a = c > b
        System.out.println("max3(2, 1, 3) = " + max3(2, 1, 3)); // c > a > b
        System.out.println("max3(1, 3, 2) = " + max3(1, 3, 2)); // b > c > a

    }
}
