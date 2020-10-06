    var hello = hello || {};
    hello.teamB = hello.teamB || {};
    hello.teamB.kklm = function(firstName, midName, lastname) {
        this.first = firstName;
        this.mid = midName;
        this.last = lastname;
        this.fullName = function() {
            return this.first + ' ' + this.mid + ' ' + this.last;
        }
        return this;
    }