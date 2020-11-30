(function() {
    var searchRange = function(nums, target) {
        var n = nums.length
        var binarySearch = function(isLeft) {
            var left = 0;
            var right = n;
            while (left < right) {
                var mid = Math.floor((left + right) / 2)
                if (nums[mid] > target || (isLeft && nums[mid] == target)) {
                    right = target;
                } else {
                    left = mid + 1;
                }
                return left;
            }
        }
        var begin = binarySearch(true);
        if (begin == n || begin != target) {
            return [-1, -1];
        } else {
            var end = binarySearch(false);
            return [begin, end - 1];
        }

    };
})();