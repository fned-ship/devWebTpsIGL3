#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define NL 4  
#define NC 4   

int A[NL][NC], x[NC], y[NL];

void* produit_ligne(void* arg) {
    int i = *((int*)arg);

    y[i] = 0;
    for (int j = 0; j < NC; j++)
        y[i] += A[i][j] * x[j];

    pthread_exit(NULL);
}

int main() {
    pthread_t threads[NL];
    int lignes[NL];

    for (int i = 0; i < NL; i++)
        for (int j = 0; j < NC; j++)
            A[i][j] = rand() % 10;

    for (int j = 0; j < NC; j++)
        x[j] = rand() % 10;

    for (int i = 0; i < NL; i++) {
        lignes[i] = i;
        pthread_create(&threads[i], NULL, produit_ligne, &lignes[i]);
    }


    for (int i = 0; i < NL; i++)
        pthread_join(threads[i], NULL);


    printf("A:\n");
    for (int i = 0; i < NL; i++) {
        for (int j = 0; j < NC; j++)
            printf("%3d ", A[i][j]);
        printf("\n");
    }
    printf("x:\n");
    for (int i = 0; i < NL; i++)
        printf("%3d\n",x[i]);

    printf("Résultat y = A × x :\n");
    for (int i = 0; i < NL; i++)
        printf("%3d\n", y[i]);

    return 0;
}
