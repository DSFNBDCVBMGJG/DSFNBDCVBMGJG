<?php
abstract class DeliveryMethod {
    abstract public function deliver($orderDetails);
}

class BikeDelivery extends DeliveryMethod {
    public function deliver($orderDetails) {
        // Implementation for bike delivery
        return "Delivering order via bike: " . $orderDetails;
    }
}

class CarDelivery extends DeliveryMethod {
    public function deliver($orderDetails) {
        // Implementation for car delivery
        return "Delivering order via car: " . $orderDetails;
    }
}
?>