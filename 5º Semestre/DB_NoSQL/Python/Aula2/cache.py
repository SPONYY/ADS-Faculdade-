import time
import random

class Cache:
    def __init__(self, size):
        self.size = size
        self.data = []

    def is_full(self):
        return len(self.data) >= self.size

    def add(self, value):
        if self.is_full():
            self.data.pop(0)
        self.data.append(value)

    def search(self, value):
        return value in self.data

    def __str__(self):
        return str(self.data)

class MemorySystem:
    def __init__(self):
       
        self.cache_l1 = Cache(5)   
        self.cache_l2 = Cache(20)  
        self.main_memory = list(range(1001)) 

    def search_memory(self, value):
        print(f"\nPesquisando valor {value}...")

        
        print("Consultando Cache L1:", self.cache_l1)
        if self.cache_l1.search(value):
            print(f"Cache L1 HIT! Valor {value} encontrado.")
            return True
        
        print("Cache L1 MISS! Procurando no próximo nível...")

       
        time.sleep(0.5)
        print("Consultando Cache L2:", self.cache_l2)
        if self.cache_l2.search(value):
            print(f"Cache L2 HIT! Valor {value} encontrado.")
            # Move para L1
            self.cache_l1.add(value)
            return True
        
        print("Cache L2 MISS! Procurando na memória principal...")

       
        time.sleep(1.0)
        if value in self.main_memory:
            print(f"Memória Principal HIT! Valor {value} encontrado.")
           
            self.cache_l2.add(value)
            self.cache_l1.add(value)
            return True
        
        print(f"Valor {value} não encontrado no sistema!")
        return False

    def simulate(self, num_requests):
        
        for _ in range(num_requests):
            value = random.randint(0, 1050) 
            self.search_memory(value)
            print("-" * 50)


if __name__ == "__main__":
    system = MemorySystem()
    system.simulate(10) 