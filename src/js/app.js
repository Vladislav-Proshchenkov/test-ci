export function getHealthStatus({ health }) {
    if (health > 50) {
      return 'healthy';
    } else if (health >= 15 && health <= 50) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));