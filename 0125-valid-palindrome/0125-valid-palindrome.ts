function isPalindrome(s: string): boolean {
  // Convert to lowercase and remove all non-alphanumeric characters (including spaces)
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let n: number = s.length;

  for (let i = 0; i < n / 2; i++) {
    // FIXED: Added 's.' before the second charAt (or used array indexing)
    if (s[i] !== s[n - 1 - i]) {
        return false;
    }
  } 
  return true; 
}
