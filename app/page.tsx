"use client";
import { View, Text, TouchableOpacity, ScrollView } from "react-native-web";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1A1A1A", padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#00A859" }}>ASA Betting</Text>
        <Text style={{ fontSize: 18, color: "#fff" }}>Balance: UGX 50,000</Text>
      </View>

      {/* Upcoming Matches */}
      <View style={{ backgroundColor: "#2A2A2A", padding: 20, borderRadius: 12, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff", marginBottom: 15 }}>
          Upcoming Matches
        </Text>
        {[
          { teams: "Arsenal vs Chelsea", time: "Today 18:00", odds: { home: "2.10", draw: "3.20", away: "2.90" } },
          { teams: "Barcelona vs Real Madrid", time: "Tomorrow 21:00", odds: { home: "2.50", draw: "3.00", away: "2.70" } },
        ].map((match, index) => (
          <View key={index} style={{ marginBottom: 15, backgroundColor: "#1A1A1A", padding: 15, borderRadius: 8 }}>
            <Text style={{ fontSize: 16, color: "#fff" }}>{match.teams}</Text>
            <Text style={{ fontSize: 14, color: "#aaa" }}>{match.time}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <TouchableOpacity style={{ backgroundColor: "#00A859", padding: 8, borderRadius: 6 }}>
                <Text style={{ color: "#fff" }}>Home {match.odds.home}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "#00A859", padding: 8, borderRadius: 6 }}>
                <Text style={{ color: "#fff" }}>Draw {match.odds.draw}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "#00A859", padding: 8, borderRadius: 6 }}>
                <Text style={{ color: "#fff" }}>Away {match.odds.away}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, backgroundColor: "#2A2A2A", borderRadius: 12 }}>
        {["🏠", "🏆", "📅", "🪙"].map((icon, index) => (
          <Text key={index} style={{ fontSize: 24, color: "#fff" }}>{icon}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
