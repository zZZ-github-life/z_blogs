package online.zzzzzzz.mvc.chat;

import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author zZZ.... <br/>
 * @description <br/>
 * @date 2023/8/27$  <br/>
 */
public class MultipleConcurrentHashMap<K,V,N>  {

    static class Node<K,V,N> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        volatile V val;
        volatile N num;
        volatile MultipleConcurrentHashMap.Node<K,V,N> next;

        Node(int hash, K key, V val, N num, MultipleConcurrentHashMap.Node<K,V,N> next) {
            this.hash = hash;
            this.key = key;
            this.val = val;
            this.next = next;
            this.num = num;
        }

        public final K getKey()       { return key; }
        public final V getValue()     { return val; }
        public final N getNum()     { return num; }
        public final int hashCode()   { return key.hashCode() ^ val.hashCode() ^ num.hashCode(); }
        public final String toString(){ return key + "=" + val + "=" + num; }
        public final V setValue(V value) {
            throw new UnsupportedOperationException();
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Node<?, ?, ?> node = (Node<?, ?, ?>) o;
            return hash == node.hash && Objects.equals(key, node.key) && Objects.equals(val, node.val) && Objects.equals(num, node.num) && Objects.equals(next, node.next);
        }

        /**
         * Virtualized support for map.get(); overridden in subclasses.
         */
        MultipleConcurrentHashMap.Node<K,V,N> find(int h, Object k) {
            MultipleConcurrentHashMap.Node<K,V,N> e = this;
            if (k != null) {
                do {
                    K ek;
                    if (e.hash == h &&
                            ((ek = e.key) == k || (ek != null && k.equals(ek))))
                        return e;
                } while ((e = e.next) != null);
            }
            return null;
        }
    }
    public V multiplePut(K key, V value,N num) {
      return  null;
    }
}
