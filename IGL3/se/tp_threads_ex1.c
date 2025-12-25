#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define NB_THREADS 4

int global_var = 10;

void* thread_func(void* arg) {
    int local_var = 20;  
    pthread_t tid = pthread_self();
    int num = *((int*)arg);

    printf("[Thread %d / tid=%lu] global=%d  local=%d\n",num, tid, global_var, local_var);

    global_var += 1;

    // pthread_exit(NULL);
}

int main() {
    pthread_t threads[NB_THREADS];
    int ids[NB_THREADS];

    for (int i = 0; i < NB_THREADS; i++) {
        ids[i] = i;
        pthread_create(&threads[i], NULL, thread_func, &ids[i]);
    }

    for (int i = 0; i < NB_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("Valeur finale de global_var = %d\n", global_var);

    return 0;
}
